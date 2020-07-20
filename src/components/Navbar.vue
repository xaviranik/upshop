<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container">
        <router-link class="navbar-brand" to="/">UpShop</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                Home
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
          <button
            v-if="! isLoggedIn"
            class="btn btn-outline-primary my-2 my-sm-0 ml-2"
            data-toggle="modal"
            data-target="#authModal"
          >Login/Signup</button>
          <router-link
            to="/admin/overview"
            v-else
            class="btn btn-outline-primary my-2 my-sm-0 ml-2"
          >Dashboard</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { fb } from "@/firebase";

export default {
  name: "Navbar",
  computed: {
    isLoggedIn() {
      const user = fb.auth().currentUser;

      return user !== null;
    }
  }
};
</script>
