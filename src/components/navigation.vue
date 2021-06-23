<template>
<!-- <div> -->
<!-- <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Never expand</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse show" id="navbarsExample01" style="">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-md-0">
          <input class="form-control" type="text" placeholder="Search" aria-label="Search">
        </form>
      </div>
    </nav>
    <router-view></router-view>
</div> -->

    <div class="g">
        <div class="h navbar-light navrar d-flex flex-column flex-md-row align-items-center p-3 px-md-4 box-shadow ">
        <img src="../assets/logo.png" class="logoimg my-0 mr-md-auto">
        <nav class=" my-2 my-md-0 mr-md-3">
            <a class="font p-2 text-dark" href="#">Features</a>
            <a class="font p-2 text-dark" href="#">Enterprise</a>
            <a class="font p-2 text-dark" href="#">Support</a>
            <a class="font p-2 text-dark" href="#">Pricing</a>
        </nav>
        </div>
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style >
.h{
z-index:100;
background-color: rgb(231, 236, 243);
}
.logoimg{
width:50px;
}
.font{
font-size:20px;
}
</style>