<template>
    <!-- Content Holder -->
    <div class="content-loader">
        <!-- Section Ad -->
        <section class="section__banner" v-if="article.length">
                <button class="btn btn-close" @click="closeDetailSection">
                    <span class="icon icon-close2"></span>
                </button>
                    <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="banner__wrapper">
                                <div class="banner__info">

                                <p>
                                    <span class="icon icon-Twitter"></span>
                                    <span class="post-topic">ARTIFICIAL INTELLIGENCE</span> | <span class="post-location" v-if="article.fields.City !== null ">{{ article.fields.City }}</span></p>
                                    <h3>{{ article.fields['Title/Topic'] }}</h3>
                                    <p><span class="post-date">19.01.18</span> in <span class="post-publication">Washington Post</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
        </section>

        <!-- Post Thumbnail -->
        <section class="section__postDetail">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                    <div class="post__img">
                        <img :src="articleImage" alt="image">
                    </div>
                    </div>
                    <div class="col-sm-3">
                    <table class="table">
                        <tr>
                            <td><strong>City</strong></td>
                            <td><p v-if="article.fields.City !== null ">{{ article.fields.City }}</p></td>
                        </tr>
                        <tr>
                            <td><strong>THEME</strong></td>
                            <td><p>Future</p></td>
                        </tr>
                        <tr v-if="article.fields.Topics.length > 0">
                            <td><strong>TOPIC</strong></td>
                            <td>
                               <p>{{ getTopicNameByID(article.fields.Topics) }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>SECTOR</strong></td>
                            <td><p>Technology</p></td>
                        </tr>
                        <tr>
                            <td><strong>PUBLICATION</strong></td>
                            <td><p>Washington Post</p></td>
                        </tr>
                        <tr>
                            <td><strong>DATE</strong></td>
                            <td><p>19.01.18</p></td>
                        </tr>
                    </table>
                    <ul class="social-links">
                        <li><a href="#"><span class="icon icon-Email"></span> Email</a></li>
                        <li><a href="#"><span class="icon icon-LinkedIn"></span> Share</a></li>
                        <li><a href="#"><span class="icon icon-Twitter"></span> Tweet</a></li>
                        <li><a href="#"><span class="icon icon-Facebook"></span> Share</a></li>
                    </ul>
                    </div>
                    <div class="col-sm-6">
                    <div class="post__desc">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.
                        </p>
                    </div>
                    <div class="post__Ad">
                        <div class="ad__img">
                            <img src="../../assets/img/val.jpg" alt="val.jpg">
                        </div>
                        <p>The strategy will help reduce transportation costs by 44%, resulting in savings of up to AED 900 million a year. The strategy will help reduce transportation costs by 44%.</p>
                    </div>
                    </div>
                    <div class="col-sm-3">
                    <div class="post__sidebar">
                        <div class="post__wrap">
                            <div class="grid__info">
                                <div class="meta">
                                <span class="business">INDUSTRY 4.0  </span> |  <span class="location">Dubai</span>
                                </div>
                                <div class="title">
                                <p>The Impact of the Fourth Industrial Revolution</p>
                                </div>
                            </div>
                        </div>
                        <div class="post__wrap">
                            <div class="grid__info">
                                <div class="meta">
                                <span class="business">INDUSTRY 4.0  </span> |  <span class="location">Dubai</span>
                                </div>
                                <div class="title">
                                <p>The Impact of the Fourth Industrial Revolution</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      articleImage: null
    }
  },
  props: ['article', 'allTopics'],
  watch: {
    article () {
      if (this.article.fields.Attachment) { this.articleImage = this.article.fields.Attachment[0].thumbnails.large.url } else { this.articleImage = 'https://picsum.photos/600/300/?image=25' }
    }
  },
  methods: {
    closeDetailSection () {
      const el = document.body
      el.classList.remove('content-open')
      $('.content-loader').slideUp()
    },
    getTopicNameByID (ids) {
      var topicName = []
      for (let index = 0; index < ids.length; index++) {
        this.allTopics.map(function (topic) {
          if (topic.id === ids[index]) {
            topicName.push(topic.value)
          }
        })
      }
      return topicName.join()
    }
  }
}
</script>
