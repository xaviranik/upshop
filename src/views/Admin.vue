<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">UpShop Admin</a>
            <div id="close-sidebar" @click="toggleSidebar">
              <i class="fas fa-times"></i>
            </div>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic">
              <img
                class="img-responsive img-rounded"
                src="https://i.pravatar.cc/300"
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
                <i class="fa fa-circle"></i>
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
                <a href="#">
                  <i>
                    <ion-icon name="speedometer-outline"></ion-icon>
                  </i>
                  <span class="menu-text">Overview</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i>
                    <ion-icon name="albums-outline"></ion-icon>
                  </i>
                  <span class="menu-text">Products</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i>
                    <ion-icon name="cart-outline"></ion-icon>
                  </i>
                  <span class="menu-text">Orders</span>
                </a>
              </li>
              <li>
                <a href="#">
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
        <div id="overlay" class="overlay"></div>
        <div class="container-fluid p-5">Page</div>
      </main>
      <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      window.$(".page-wrapper").toggleClass("pinned");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
