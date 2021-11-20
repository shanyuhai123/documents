# 从 CLI 开始

> CLI(Command-Line Interface) 虽可手动监听用户输入，但从头开始则显得过于麻烦了，借助社区的力量吧。

## 工具包

|                             工具                             | 作用                                         |
| :----------------------------------------------------------: | -------------------------------------------- |
|     [commander](https://www.npmjs.com/package/commander)     | 解析用户命令行的输入、参数                   |
|         [chalk](https://www.npmjs.com/package/chalk)         | 美化控制台的输出内容：字体、颜色、背景色     |
|      [inquirer](https://www.npmjs.com/package/inquirer)      | 命令行交互                                   |
|         [slash](https://www.npmjs.com/package/slash)         | 在 Windows 中使用 / 路径                     |
|      [minimist](https://www.npmjs.com/package/minimist)      | 解析参数                                     |
|           [ora](https://www.npmjs.com/package/ora)           | 优雅的加载效果                               |
|        [dotenv](https://www.npmjs.com/package/dotenv)        | 从 `.env` 文件中加载环境变量到 `process.env` |
| [yaml-front-matter](https://www.npmjs.com/package/yaml-front-matter) | 解析文件内的 `frontmatter`                   |
|    [portfinder](https://www.npmjs.com/package/portfinder)    | 寻找可用端口号                               |
|        [semver](https://www.npmjs.com/package/semver)        | 校验版本                                     |

## 简单 CLI

### 从 HELLO CLI 开始

初始化：

```bash
mkdir -p hello-cli/bin 
cd hello-cli && npm init -y
```

添加文件：

```bash
cat > bin/cli.js << EOF
#! /usr/bin/env node

console.log("Hello CLI")
EOF
```

在 `package.json` 中指定入口：

```json
{
  "bin": "./bin/cli.js"
}
```

链接到全局并执行：

```bash
# 链接到全局
npm link

# 执行
hello-cli
# Hello CLI
```

### 解析命令 commander

引入依赖：

```bash
yarn add commander
```

修改 `cli.js`：

```js
#! /usr/bin/env node

const { program } = require('commander')
const package = require('../package.json')

program
  .version(package.version)
  .command('create <app-name>')
  .description('create a new project powered by cli-test')
  .action(name => {
    console.log(`project name is ${name}`)
  })

program.parse(process.argv)
```

测试：

```bash
hello-cli

# 输出
Usage: hello-cli [options] [command]

Options:
  -V, --version      output the version number
  -h, --help         display help for command

Commands:
  create <app-name>  create a new project powered by cli-test
  help [command]     display help for command
  
hello-cli -V
# 1.0.0

hello-cli create my-app
# project name is my-app
```

### 交互及美化输出

引入依赖：

```bash
# 交互
yarn add inquirer
# 美化
yarn add chalk
```

修改 `action` 内容：

```js
program
  .action(async name => {
    const { ok, color } = await inquirer.prompt([
      {
        name: 'ok',
        type: 'confirm',
        message: `Generate project in ${chalk.cyan('current')} directory?`
      },
      {
        name: 'color',
        type: 'input',
        message: 'input color',
      }
    ])

    if (ok) {
      console.log(`your project is ${chalk[color](name)}`)
    }
  })
```

### 加载效果

引入依赖：

```bash
yarn add ora
```

再调整 `action`：

```js
program
  .action(async name => {
    const { ok, color } = await inquirer.prompt([
      {
        name: 'ok',
        type: 'confirm',
        message: `Generate project in ${chalk.cyan('current')} directory?`
      },
      {
        name: 'color',
        type: 'input',
        message: 'input color',
      }
    ])

    
    if (ok) {
      const spinner = ora('Loading unicorns').start()
      spinner.color = 'red'

      setTimeout(() => {
        spinner.stop()
        spinner.succeed('Loading succeed')
        console.log(`your project is ${chalk[color](name)}`)
      }, 3000)
    }
  })
```
