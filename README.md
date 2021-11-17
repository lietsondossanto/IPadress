<h1 align="center">Welcome to IPadress 👋</h1>
<p align="center">
    <img alt="License" src="https://img.shields.io/badge/Version-1.0-brightgreen">
    <img src="https://img.shields.io/github/last-commit/lietsondossanto/ipadress" alt="last-communit">&nbsp;&nbsp;
    <img src="https://img.shields.io/github/issues/lietsondossanto/ipadress" alt="issues">&nbsp;&nbsp;
    <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>
<p align="center">
    <a href="#project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#technology">Technology</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#license">License</a>
</p><br>

<span id="project">`ipaddres`</span> is an IP locator ie it tracks any device by the ip address and returns data with the country where this ip address is located the province(state), city, longitude, latitude, ip provider(isp), it is integrated with a map (Google-maps) showing the exact location of this address or device on this web page contains some posts about ip addresses and also some tips about anonymity on the internet.

The base technology for creating this project was the [Next](https://reactjs.org/)(`11.1.2`) to develop this project I took about 1 week after some trial and error, This website is fully responsive and can be accessed from any device.<br><br>

> This project is already hosted on the vercel website and ready to use, to access the web page click [aqui](https://ipadress.vercel.app/).

## ✨ preview

Home page

<p align="center">
  <img width="700" align="center" src="./src/assets/img/img.png" alt="demo"/>
</p><br>

## <span id="installation">👨‍💻 Quick Start</span>

To use the website on your local machine follow the steps below:

Cloning the Repository:

```sh
git clone https://github.com/lietsondossanto/ipadress.git
```

Accessing the project folder:

```sh
cd taskmanager
```

Install dependeces:

```sh
yarn
```

execute:

```sh
yarn start
```
<br>

## ⁉️ Details

To create this project I used the `ipdata` API to be able to access data such as longitude, latitude, city etc...

I created an environment variable in an .env file called `API_IPDATA_KEY` that will store my `ipdata` API key

To add this environment variable to the project just create a `.env` file at the root of the project and place the following code inside the `.env` file:
```
NEXT_PUBLIC_API_IPDATA_KEY="<YOUR_KEY>"
```
<br>

## 😤 difficulties

Ao desenvolver este projeto eu tive algumas dificuldades ao criar o front-end e também ao encontrar as APIs certas para usar neste web saite.

A minha maior dificuldade ao desenvolver esta web page foi encontrar as APIs certas, só para desenvolver este web site eu tive que testar em média 6 APIs que são:

- [React_Leafpad]()
- [Ipify]()
- [Google-maps]()
- [Pigeon]()
- [ipdata]()
- [ipStack]()

Todas elas tinham vantagens e desvantagem eu sempre acabava por ter problemas aoo utilizar estas APIs.

Também tive um pouco de dificuldade para achar a paleta de de cores ideial,
a paleta de cores que estou a usar neste web site foi sorteada no site [coolors](https://coolors.co/).

## <span id="technology">🚀 Technologies</span>

This project was developed with the following technologies:

- [next.js](https://next.org/)
- [Styled-components](https://styled-components.com/)
- [polished](https://polished.js.org/)
- [prettier](https://prettier.io/)
- [EsLint](https://eslint.org/)
- [nprogress](https://www.npmjs.com/package/nprogress)
- [React-icons](https://react-icons.github.io/react-icons/)
- [axios](https://github.com/axios/axios)
- [Pigeon Maps](https://pigeon-maps.js.org/)

## 🤝 Contributing
- Fork this repository;
- Create a branch with your feature: `git checkout -b my-feature`;
- commit your changes: `git commit -m 'feat: my-new-feature'`;
- push to your branch: `git push origin my-feature`.

## Author

👤 **Lietson Dos Santos**

- Twitter: [@lietsondossanto](https://twitter.com/lietsondossanto)
- Github: [@lietsondossanto](https://github.com/lietsondossanto)
<br />
<h2 id="license">📝 License</h2>

---
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details<br><br>
Copyright © 2021 [Lietson Dos Santos](https://github.com/lietsondossanto).
