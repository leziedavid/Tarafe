<template>

    <div class="text-center mt-50">
        <nav class="box-pagination">
             <ul class="pagination justify-content-center">

                 <li class="page-item" :class="{ disabled: pagination.current_page <= 1 }">
                    <a class="page-link page-prev" @click.prevent="changePage(pagination.current_page - 1)">
                       <svg fill="none" stroke="currentColor" stroke-width="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"></path>
                        </svg>
                    </a>
                </li>

                    <li v-for="page in pages"  :key="page" :class="isCurrentPage(page) ? 'active' : ''" class="page-item">
                        <a class="page-link" @click.prevent="changePage(page)">{{ page }} 
                            <span v-if="isCurrentPage(page)" class="sr-only"> </span>
                        </a>
                    </li>


                <li :class="{ disabled: pagination.current_page >= pagination.last_page }" class="page-item">
                    <a class="page-link page-next" @click.prevent="changePage(pagination.current_page + 1)">
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
   </div>
<!-- 
    <nav aria-label="...">
        <ul class="pagination justify-content-center">

            <li class="page-item des-font" v-for="page in pages"  :key="page" :class="isCurrentPage(page) ? 'active' : ''">

                <a style="color:orange;" class="page-link des-font" @click.prevent="changePage(page)">{{ page }}
                    <span v-if="isCurrentPage(page)" class="sr-only">(current)</span>
                </a>
            </li>
        </ul>
    </nav> -->
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
