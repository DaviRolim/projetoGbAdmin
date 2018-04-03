<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">GB Admin</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/analytics" activeClass="active" tag="li"><a>Analytics</a></router-link>
                    <router-link to="/cadastro" activeClass="active" tag="li"><a>Cadastro</a></router-link>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
  export default {

  }
</script>
<style>
</style>
