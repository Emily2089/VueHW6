<script>
const { VITE_API_URL } = import.meta.env;

export default {
  methods: {
    // 驗證登入
    checkAdmin() {
      this.axios.post(`${VITE_API_URL}/api/user/check`)
        .then((res) => {
          console.log('驗證成功:', res.data.success);
          // this.getData();
        })
        .catch(() => {
          this.$router.push('/login');
          // alert(err.response.data.message);
          // window.location = 'index.html';
        });
    },
  },
  mounted() {
    // 將 cookie 裡的 token 夾在 headers 裡
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)emilyToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    this.axios.defaults.headers.common.Authorization = token;
    this.checkAdmin();
  },
};
</script>

<template>
  <h1>這是後台</h1>
  <nav>
    <RouterLink to="/admin/products">產品列表</RouterLink> |
    <RouterLink to="/admin/order">訂單列表</RouterLink>|
    <RouterLink to="/">回到前台頁面</RouterLink>
  </nav>
  <RouterView></RouterView>
</template>
