<template>
    <nav aria-label="...">
        <ul class="button-container text-center">

            <li class="" :class="{ disabled: pagination.current_page <= 1 }">
                <a style="color:orange;"  class="btn btn-pagina" @click.prevent="changePage(pagination.current_page - 1)">
                    <ion-icon style="color:orange;"  name="return-up-forward-outline"></ion-icon>
                </a>
            </li>

            <li class="" v-for="page in pages"  :key="page" :class="isCurrentPage(page) ? 'active' : ''">
                <a style="color:orange;" class="btn btn-pagina" @click.prevent="changePage(page)">{{ page }}
                    <span v-if="isCurrentPage(page)" class="sr-only">(current)</span>
                </a>
            </li> 

            <li class="" :class="{ disabled: pagination.current_page >= pagination.last_page }">
                <a style="color:orange;" class="btn btn-pagina" @click.prevent="changePage(pagination.current_page + 1)">
                    <ion-icon style="color:orange;"  name="return-up-back-outline"></ion-icon>
                </a>
            </li>

        </ul>
    </nav>
</template>

<script>
    export default {
        props:['pagination', 'offset'],
        methods: {
            isCurrentPage(page){
                return this.pagination.current_page === page
            },
            changePage(page) {
                if (page > this.pagination.last_page) {
                    page = this.pagination.last_page;
                }
                this.pagination.current_page = page;
                this.$emit('paginate');
            }
        },
        computed: {
            pages() {
                let pages = []

                let from = this.pagination.current_page - Math.floor(this.offset / 2)

                if (from < 1) {
                    from = 1
                }

                let to = from + this.offset -1

                if (to > this.pagination.last_page) {
                    to = this.pagination.last_page
                }

                while (from <= to) {
                    pages.push(from)
                    from++
                }

                return pages
            }
        }
    }
</script>

<style scoped>

.btn.btn-pagina {
    /* background-color: #040D12; */
    background-color: #242078;
    border-radius: 0px;
    padding: 10px 20px;
    margin: 0 10px;
    color: white;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    cursor: pointer;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px; 
}


</style>