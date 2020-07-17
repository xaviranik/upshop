<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">UpShop Admin</a>
            <div id="close-sidebar" @click="toggleSidebar">
              <ion-icon name="chevron-back-circle-outline"></ion-icon>
            </div>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic">
              <img
                class="img-responsive img-rounded"
                src="https://i.pravatar.cc/150?u=test"
                alt="User picture"
              />
            </div>
            <div class="user-info">
              <span class="user-name">
                Mr.
                <strong>Jon Snow</strong>
              </span>
              <span class="user-role">Administrator</span>
              <span class="user-status">
                <span class="dot mr-1"></span>
                <span>Online</span>
              </span>
            </div>
          </div>
          <!-- sidebar-search  -->
          <div class="sidebar-item sidebar-search">
            <div>
              <div class="input-group">
                <input type="text" class="form-control search-menu" placeholder="Search..." />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i>
                      <ion-icon name="search-outline"></ion-icon>
                    </i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- sidebar-menu  -->
          <div class="sidebar-item sidebar-menu">
            <ul>
              <li class="header-menu">
                <span>Menu</span>
              </li>
              <li>
                <router-link to="/admin/overview">
                  <i>
                    <ion-icon name="speedometer-outline"></ion-icon>
                  </i>
                  <span class="menu-text">Overview</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/products">
                  <i>
                    <ion-icon name="albums-outline"></ion-icon>
                  </i>
                  <span class="menu-text">Products</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/orders">
                  <i>
                    <ion-icon name="cart-outline"></ion-icon>
                  </i>
                  <span class="menu-text">Orders</span>
                </router-link>
              </li>
              <li>
                <a href="#" @click="logoutUser">
                  <i>
                    <ion-icon name="log-out-outline"></ion-icon>
                  </i>
                  <span class="menu-text">Log Out</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>
      </nav>
      <!-- page-content  -->
      <main class="page-content pt-2">
        <div class="container-fluid p-4">
          <router-view></router-view>
        </div>
      </main>
      <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
import { fb } from "@/firebase";

export default {
  methods: {
    toggleSidebar() {
      window.$(".page-wrapper").toggleClass("pinned");
    },
    logoutUser() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.dot {
  height: 8px;
  width: 8px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
}
</style>
