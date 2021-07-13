---
description: 修改 axios response 返回类型
---

# 修改 axios response 返回类型

## TypeScript 错误的类型提示

在 axios 相应拦截中修改了返回值：

```ts
service.interceptors.response.use(
  response => {
    return response.data
  }, 
  err => Promise.reject(err)
)
```

但是使用时发现返回值类型依然是 `AxiosResponse<any>`：

```ts
const res = axios({})
type T = typeof res
// type T = AxiosPromise<any>
```



## 解决方案

解决方案参考：[How to use Axios with TypeScript when using response interceptors (AxiosResponse issue)](https://github.com/axios/axios/issues/1510)

### 1. 修改定义

这并不是一个好的方案，会影响到其他内容。

```ts
// src/types/axios/axios.d.ts
import axios from 'axios'

declare module 'axios' {
  export interface AxiosInstance {
    request<T = any> (config: AxiosRequestConfig): Promise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  }
}
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "typeRoots": [
      "./node_modules/@types",
      "./src/types/",
    ]
  }
}
```

### 2. 指定返回类型

这是一个更好的选择，在 [Allow custom return types(PR)](https://github.com/axios/axios/pull/1605) 中：

```ts
export interface AxiosInstance {
  (config: AxiosRequestConfig): AxiosPromise;
  (url: string, config?: AxiosRequestConfig): AxiosPromise;
  defaults: AxiosRequestConfig;
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };
  request<T = any, R = AxiosResponse<T>> (config: AxiosRequestConfig): Promise<R>;
  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  patch<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
}
```

可以看到增加了 `R` 指定返回类型，当没手动制定时会根据 `T` 进行推导，这样就可以得到一个良好的解决方式：

```ts
interface User {
  name: string
  age: number
}

const res = axios.request<any, User>({})
type T = typeof res
// type T = Promise<User>
```

但作为接口而言，一般会加一层封装：

```ts
interface AxiosResponseData<T> {
  code: number
  message: string
  data?: T
}

interface User {
  name: string
  age: number
}

const res = axios.request<any, AxiosResponseData<User[]>>({})
type T = typeof res
// type T = Promise<AxiosResponseData<User[]>>
```

如果在响应拦截做了处理，则可以省略这一部分，毕竟每个 `interface` 都加这个还是有些麻烦的。

