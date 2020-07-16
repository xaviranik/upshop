<template>
  <div>
    <div
      class="modal fade"
      id="staticBackdrop"
      data-backdrop="static"
      data-keyboard="true"
      tabindex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul class="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active"
                  id="pills-login-tab"
                  data-toggle="pill"
                  href="#pills-login"
                  role="tab"
                  aria-controls="pills-login"
                  aria-selected="true"
                >Login</a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="pills-signup-tab"
                  data-toggle="pill"
                  href="#pills-signup"
                  role="tab"
                  aria-controls="pills-signup"
                  aria-selected="false"
                >Register</a>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="pills-login-tab"
              >
                <form>
                  <div class="form-group">
                    <label for="login-email">Email Address</label>
                    <input type="email" class="form-control" id="login-email" />
                  </div>
                  <div class="form-group">
                    <label for="login-password">Password</label>
                    <input type="login-password" class="form-control" id="login-password" />
                  </div>
                  <button type="submit" class="btn btn-primary">Login</button>
                </form>
              </div>
              <div
                class="tab-pane fade"
                id="pills-signup"
                role="tabpanel"
                aria-labelledby="pills-signup-tab"
              >
                <form>
                  <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" class="form-control" id="name" aria-describedby="nameHelp" />
                    <small id="nameHelp" class="form-text text-muted">Please provide your real name</small>
                  </div>
                  <div class="form-group">
                    <label for="signup-email">Email Address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="signup-email"
                      aria-describedby="emailHelp"
                    />
                    <small
                      id="emailHelp"
                      class="form-text text-muted"
                    >We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <label for="signup-password">Password</label>
                    <input type="password" class="form-control" id="signup-password" />
                  </div>
                  <button type="submit" class="btn btn-primary">Create Account</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthModal"
};
</script>

<style lang="scss" scoped>
</style>