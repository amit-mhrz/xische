<template>
  <div>
    <articleDetail :article="clickedArticle" :allTopics="allTopics"></articleDetail>

    <!-- Contents -->
     <main>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="grid-wrapper">
                <div class="grid">

                  <template v-for="(listing, i) in filteredListings">
                        <div v-if="listing.length == 2" class="custom__grid" :key="i">
                          <template v-for="(list, index) in listing">
                            
                            <div class="grid__item in-view grid__sm" :key="index" @click="openListing(list.id)">
                              <div class="grid__thumb">
                                <div class="content__type">
                                  <span class="icon icon-Twitter"></span>
                                </div>
                                <img :src="getImageUrl(list.id)" />
                              </div>
                              <div class="grid__info">
                                <div class="meta">
                                  <span class="category">{{ list.fields['Type'][0] }}</span>
                                  <span v-if="list.fields.City !== null" class="location"> | {{ list.fields.City }}</span>
                                </div>
                                <div class="desc">
                                  <p>{{ list.fields['Title/Topic'] }}</p>
                                </div>
                              </div>
                            </div>
                          </template>

                        </div>
                        <div v-else-if="listing.length == 1" class="grid__item in-view" :class="[ ( i === 5 ) ? 'grid__lg' : '']" :key="i" @click="openListing(listing[0].id)">
                          <div class="grid__thumb">
                            <div class="content__type">
                              <span class="icon icon-Twitter"></span>
                            </div>
                            <img :src="getImageUrl(listing[0].id)" />
                          </div>
                          <div class="grid__info">
                            <div class="meta">
                              <span class="category">{{ listing[0].fields['Type'][0] }}</span>
                              <span class="location" v-if="listing[0].fields.City !== null"> | {{ listing[0].fields.City }}</span>
                            </div>
                            <div class="desc">
                              <p>{{ listing[0].fields['Title/Topic'] }}</p>
                            </div>
                          </div>
                        </div>
                  </template>
                
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-holder">
          <button class="btn btn-grid" @click="closeDetailSection">
            Back to Grid
          </button>
        </div>
      </main>

  </div>
</template>

<script>
import Detail from '@/components/home/Detail.vue'
import article from  '../../articles.js'
import $ from 'jquery'

export default {
    name: "Listing",
    components: {
      articleDetail: Detail,
    },
    props: {
      allTopics: { type: Array }
    },
    data () {
        return {
        listings: [],
        filterlistings: [],
        pageNumber: 0,
        showDetailSecton: false,
        clickedArticle: {}
        }
    },
    computed: {
        filteredListings () {
            let start = 0; 
            let end = 16; //(this.pageNumber * 16) + 16;

            let filtered = this.listings;
            this.filterlistings = filtered;
            filtered = filtered.slice( start, end );

            var gridChunks = [];
            gridChunks.push(filtered.slice(0, 1));
            gridChunks.push(filtered.slice(1, 2));
            gridChunks.push(filtered.slice(2, 4));
            gridChunks.push(filtered.slice(4, 6));
            gridChunks.push(filtered.slice(6, 8));
            gridChunks.push(filtered.slice(8, 9));
            gridChunks.push(filtered.slice(9, 10));
            gridChunks.push(filtered.slice(10, 12));
            gridChunks.push(filtered.slice(12, 14));
            gridChunks.push(filtered.slice(14, 15));
            gridChunks.push(filtered.slice(15, 16));
            // var singlePageChunk = [];
            // singlePageChunk = this.chunkArray( filtered, 16 );
            // var i;
            // for (i = 0; i < singlePageChunk.length; i++) { 
            //     console.log( singlePageChunk[i] )
            //     var gridChunks = [];
            //     gridChunks.push(singlePageChunk[i].slice(0, 1));
            //     gridChunks.push(singlePageChunk[i].slice(1, 2));
            // }
            //return filtered;
            return gridChunks;
        }
    },
    mounted () {
        console.log("mounted")
        this.loadListings();
    },
    methods: {
        loadListings () {
            var self = this;
            article.getDatas().then(records => { 
                console.log( records ); 
                self.listings = records;
            });
        },
        checkScroll (evt, el) {
            var D = document;
            var docHeight =  Math.max(
                    D.body.scrollHeight, D.documentElement.scrollHeight,
                    D.body.offsetHeight, D.documentElement.offsetHeight,
                    D.body.clientHeight, D.documentElement.clientHeight
                );
            var windowHeight = window.innerHeight;
            if( ( windowHeight + window.scrollY) >= docHeight ){
                console.log("call page no = ", this.pageNumber );
                this.pageNumber += 1;
            }
        },
        chunkArray (array, size) {
            const chunked_arr = [];
            let index = 0;
            while (index < array.length) {
                chunked_arr.push(array.slice(index, size + index));
                index += size;
            }
            return chunked_arr;
        },
        getImageUrl(id) {
            var img = 'https://picsum.photos/600/300/?image=25'
            this.filterlistings.find(obj => {
              if( obj.id === id ) {
                if( obj.fields.Attachment ){
                  img = obj.fields.Attachment[0].thumbnails.large.url
                }  
              } 
            });
            return img
        },
        //on single article click
        openListing(id){
          //add class on body tag
          const el = document.body;
          el.classList.add("content-open");
          $('.content-loader').slideDown();
          //get article object
          this.filterlistings.find(obj => {
              if( obj.id === id ) {
                this.clickedArticle = obj;
              } 
          });
          $('.content-loader').slideDown();
        },
        closeDetailSection() {
          const el = document.body;
          el.classList.remove("content-open");
          $('.content-loader').slideUp();
        }
    }
}
</script>
