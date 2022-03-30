<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="account"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <p>账号：admin   密码：qwe123</p>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>
<script>
import { ref } from 'vue';
import router from '@/router'

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const userInfo = { name: '张三', age: 18 }
    const onSubmit = (values) => {
      const { account, password } = values
      if(account === 'admin' && password === 'qwe123') {
        localStorage.setItem('userInfo',JSON.stringify(userInfo))
        router.push('/home')
      } else {
        Toast('账号或密码有误，请重新输入！');
      }
    };

    return {
      username,
      password,
      onSubmit,
    };
  },
};
</script>