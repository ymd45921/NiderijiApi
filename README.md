<img src="https://raw.githubusercontent.com/ymd45921/NiderijiApi/server/public/roxy_outline.svg" alt="logo" width="130" height="130" align="left" />

# nideriji-api

第三方你的日记 Web API

<br/>

[npm](https://www.npmjs.com/package/nideriji-api) · [nideriji-api-server](https://nideriji-api-server.vercel.app/)

## 简介

基于[你的日记网页版](https://nideriji.cn/login)的第三方 API 的 Node.js 实现，基于 `axios`，支持 `Typescript`。

## 使用

首先你需要安装 Node.js 和一个包管理器，以下以 `yarn` 为例：

```bash
yarn add nideriji-api
```

然后在你的项目中导入该模块，即可使用：

```ts
import Nideriji from "nideriji-api"; 
```

模块自带 Typescript 支持，无需安装 `@types/nideriji-api`。~~也没有这个包~~

使用范例见 `play` 分支或者此分支下的 `test/index.ts`。~~它们可能并不完整~~

### 简要说明

发起网络请求的方法均为包装的 `axios` 请求，调用后会返回 `Promise<AxiosResponse>` 以进行进一步的处理。

- `Nideriji.login` 发起登录请求；如果登录成功则自动存储 Token 到实例中
- `Nideriji.diary` 下的方法实现 Web 对于日记的各种增删查改
- `Nideriji.instance` 返回此模块包装的 `axios` 实例
- `Nideriji.config` 对此模块的一些行为进行配置
- `Nideriji.setHost` 设置后端服务的地址，默认值为 `https://nideriji.cn/api`

对于返回的 `AxiosResponse`，可以参考 [Axios 官网](https://axios-http.com/)。

### 在前端项目中使用

由于源服务器没有支持 CORS，所以直接在前端项目如 React 项目中使用本项目会引发 CORS 错误。目前对于这种问题的解决方法使使用代理服务器；

本仓库的 `server` 分支包含了一个使用 Next.js 云函数进行代理的简单的代理服务器，可以在 Vercel 上部署之后，使用上面提到的 `Nideriji.setHost` 方法修改服务地址为代理地址之后再使用。 

`nideriji-api-server` 的 Demo：<https://nideriji-api-server.vercel.app/>

## 附录

纯纯的图一乐。只是不太喜欢官方的 Web 版。
