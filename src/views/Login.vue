<template>
  <div class="login-bg">
    <div class="login-contain">
      <div class="login-header">
        <p>欢迎登录</p>
      </div>
      <div class="form-group">
        <div class="form-item">
          <label for="username">
            <img src="../assets/img/user.png" />
          </label>
          <input
            v-model="phone"
            id="username"
            type="text"
            placeholder="请输入账号"
          />
        </div>
        <div class="form-item">
          <label for="password">
            <img src="../assets/img/password.png" alt="" />
          </label>
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="请输入密码"
          />
        </div>
      </div>
      <div class="button-group">
        <button class="login-btn" id="doLogin" @click="loginEvent">登录</button>
      </div>

      <div class="order-login">
        <p class="order-login-line">其他登录方式</p>
        <div class="order-login-box">
          <div>
            <a href="#">
              <img
                src="../assets/img/wechat-login.png"
                alt=""
                style="width: 45px; height: 45px"
              />
              <p>微信登录</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  setup() {},
  data() {
    return {
      phone: '',
      password: '',
    };
  },
  methods: {
    async loginEvent() {
      let res = await this.$store.dispatch('login', {
        phone: this.phone,
        password: this.password,
      });
      if (res.data.code == 200) {
        this.$router.push('/me');
      }
    },
  },
};
</script>

<style lang="less" scoped>
a,
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
.login-bg {
  color: #ffffff;
  background-size: 100% 100%;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #d43c33;
}
.login-contain {
  width: 85%;
  margin: 0 auto;
}
.login-header {
  padding: 5%;
}
.login-header p {
  font-size: 32px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 0.1em 0.15em 0.1em #d43c33;
}
.login-logo {
  padding: 5%;
}
.login-logo img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
}
.login-logo p {
  color: #b45c57;
  font-size: 14px;
  text-align: center;
  letter-spacing: 2px;
  margin-top: 2%;
}
.form-group {
  padding: 5%;
}
.form-group .form-item {
  margin-top: 5%;
  padding: 0 10px;
  border-radius: 20px;
  background-color: #ea7c7c;
  display: flex;
}
.form-group .form-item input {
  outline: none;
  border: 0;
  background-color: transparent;
  color: black;
  height: 40px;
  font-size: 18px;
  width: 55%;
  margin-left: 12%;
}
.form-group .form-item input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: black;
  font-size: 16px;
}
.form-group .form-item input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: black;
  font-size: 16px;
}
.form-group .form-item input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: black;
  font-size: 16px;
}
.form-group .form-item input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #ea7c7c;
  font-size: 16px;
}
.form-group .form-item label img {
  width: 25px;
  position: absolute;
  margin-top: 5px;
}
.form-group .form-item button {
  outline: none;
  background: transparent;
  border: 1px #00cc99 dashed;
  color: #ea7c7c;
  height: 30px;
  border-radius: 5px;
  float: right;
  padding: 1%;
}
.button-group {
  padding: 5%;
}
.button-group button {
  outline: none;
  border: 0;
  width: 90%;
  height: 35px;
  margin-top: 4%;
  border-radius: 20px;
  margin-left: 4%;
  color: #ffffff;
  font-size: 18px;
}
.button-group .login-btn {
  background-color: #ffffff;
  color: #74c3ca;
}

.order-login {
  padding: 5%;
}
.order-login-line {
  display: block;
  position: relative;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
}
.order-login-line:before,
.order-login-line:after {
  content: '';
  position: absolute;
  top: 50%;
  background: #ffffff;
  width: 20%;
  height: 1px;
}
.order-login-line:before {
  left: 10%;
}
.order-login-line:after {
  right: 10%;
}
.order-login-box {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
}
.order-login-box div {
  flex: 1;
  text-align: center;
}
.order-login-box div p {
  text-align: center;
  font-size: 14px;
  color: #ffffff;
}
</style>
