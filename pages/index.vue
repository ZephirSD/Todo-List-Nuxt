<template>
  <div>
    <section class="case_tache">
      <h1>Liste des tâches</h1>
      <h3>Ajouter une tâche à réaliser</h3>
      <div class="case_input_ajout">
        <input
          type="text"
          placeholder="Ajouter une nouvelle tâche"
        />
        <button class="btn_ajout">Ajouter</button>
      </div>
      <div class="overflow-x-auto">
        <table class="table text-white">
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="/public/favicon.ico"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Yancy Tear</div>
                    <div class="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span class="badge badge-ghost badge-sm"
                  >Community Outreach Specialist</span
                >
              </td>
              <td>Indigo</td>
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
          <!-- foot -->
        </table>
      </div>
    </section>
  </div>
</template>

<script>
// export default {
//     data() {
//         return {
//             nouvTache: ""
//         }
//     },
//     methods: {
//         ajoutTache() {
//             if(this.ajoutTache){

//             }
//         }
//     },
// }
</script>

<style scoped></style>
