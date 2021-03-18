---
title: Dashboard
---

## 安装

Kubernetes 默认没有部署 Dashboard，不过安装也很简单：

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml
```

为了方便访问将 type 设置为 `NodePort`：

```bash
kubectl edit service --namespace=kubernetes-dashboard kubernetes-dashboard

# 修改
spec:
  clusterIP: 10.97.38.169
  externalTrafficPolicy: Cluster
  ports:
  - nodePort: 32576
    port: 443
    protocol: TCP
    targetPort: 8443
  selector:
    k8s-app: kubernetes-dashboard
  sessionAffinity: None
  type: NodePort
```

接着就可以查看暴露出的 Port：

```bash
kubectl get service --namespace=kubernetes-dashboard kubernetes-dashboard

# 结果
NAME                   TYPE       CLUSTER-IP     EXTERNAL-IP   PORT(S)         AGE
kubernetes-dashboard   NodePort   10.97.38.169   <none>        443:32576/TCP   10h
```

访问该主机和暴露出的 32576 即可。

> 注意：Chrome 访问被拒绝，可使用 Firefox。



## 权限

创建一个 admin 用户：

```yaml
# dashboard-adminuser.yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kubernetes-dashboard

---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: admin-user
  namespace: kubernetes-dashboard
```

获取 token：

```bash
kubectl -n kubernetes-dashboard get secret $(kubectl -n kubernetes-dashboard get sa/admin-user -o jsonpath="{.secrets[0].name}") -o go-template="{{.data.token | base64decode}}"
```

接着就可以登录了。