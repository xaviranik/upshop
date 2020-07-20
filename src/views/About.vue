<template>
  <div class="About">
    <Navbar />
    <div class="container my-4">
      <div class="row d-flex align-items-start my-4">
        <div class="col-md-5">
          <h1>About</h1>
          <p
            class="lead"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe totam, unde assumenda, adipisci officiis odio praesentium architecto ducimus aspernatur modi est, pariatur cupiditate quasi ad?</p>
        </div>
        <div class="col-md-7">
          <img src="@/assets/images/shopper_2.svg" alt="shopper_2" class="img-fluid" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p
            class="lead"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsam dolor quos consequatur vero reiciendis nisi expedita natus quis qui consequuntur placeat facere, officiis quisquam nemo quidem vel maxime suscipit sapiente doloremque dignissimos veritatis modi. Fuga laborum saepe assumenda asperiores sed doloremque velit accusantium sequi maiores dolores illo consequuntur, repellat laboriosam ut ipsum quod sapiente beatae! Adipisci velit, eius consequatur nesciunt pariatur harum laboriosam incidunt voluptas aliquam eligendi tenetur est vitae mollitia ut numquam! Placeat corporis iure doloribus numquam ad. At asperiores neque veritatis eos impedit obcaecati doloribus ipsum nobis quibusdam exercitationem quisquam, consequatur necessitatibus, vel ullam delectus facilis sed inventore dolorem, fuga dolore odio architecto. Distinctio, fugit. Asperiores, alias quaerat! Obcaecati reprehenderit magnam quae molestiae, exercitationem suscipit voluptatibus odio dolorum praesentium, nesciunt illo minima autem fuga optio omnis eum nostrum voluptas maiores temporibus voluptates necessitatibus saepe eligendi ex! Beatae, dolorum quasi sequi, officiis commodi aut saepe exercitationem, esse quidem minima laudantium animi iusto quis vero? Repellendus illo consequatur corporis maxime doloremque dignissimos ipsa pariatur nostrum recusandae ipsam inventore aliquam illum, molestias numquam officiis saepe nihil! Doloribus laborum maxime similique placeat illum hic repudiandae aut tempora harum ipsum doloremque eius beatae unde voluptates obcaecati a quibusdam cumque quod nulla, debitis quos eum optio. Minus distinctio enim asperiores quod dicta magnam non ullam sapiente facere harum sequi ratione voluptates quasi a inventore perferendis error nihil esse modi maiores ipsa, ex suscipit laudantium fugiat. Ad id natus assumenda, eius debitis saepe mollitia consequatur eos, quo quis ullam, ipsa aspernatur? Veniam, iure dolorem dignissimos quisquam aliquam repellat odio modi commodi ipsam autem et esse pariatur. Rerum ex adipisci, facere recusandae dignissimos tempora ea facilis vel at ipsam dicta, officia molestiae, nobis provident alias. Voluptates, dolorum! Laudantium ullam tenetur eaque maiores, dolorem assumenda? Tempora voluptas, natus at magni, quam veniam reiciendis voluptatibus provident quaerat aliquam eos ut fugit molestias labore optio qui, iusto beatae cumque. Dolore porro amet molestiae aut, quasi consequatur animi magnam necessitatibus tempore eaque ipsum labore dolor exercitationem veritatis facere sit eius doloribus excepturi optio facilis nostrum commodi illo. Mollitia molestiae harum velit provident laborum! Voluptates fuga explicabo quaerat quibusdam obcaecati perspiciatis, quos illum numquam pariatur repellat harum itaque commodi veritatis ipsa odio maiores accusamus officia voluptatibus consequuntur modi tempora? Exercitationem harum recusandae tempora voluptatibus, numquam aperiam. Ex culpa dolores alias exercitationem! Debitis ratione illum voluptas id nam ad nemo qui laudantium dolores! Voluptate vitae suscipit qui vero mollitia. Illo, vel.</p>
        </div>
      </div>
    </div>
    <Footer />

    <AuthModal />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "About",
  components: {
    Navbar,
    Footer
  }
};
</script>
