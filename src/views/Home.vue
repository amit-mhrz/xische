<template>
  <div class="wrapper">
      <xische-header :allTypes="allTypes" :allTopics="allTopics"></xische-header>
      <ad-banner></ad-banner>
      <listing :allTopics="allTopics"></listing>
      <xische-footer></xische-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Header from '@/components/home/Header.vue'
import Ad from '@/components/home/Ad.vue'
import Listing from '@/components/home/Listing.vue'
import Footer from '@/components/common/Footer.vue'

export default {
  name: 'home',
  data () {
    return {
      allTypes: [],
      allTopics: []
    }
  },
  components: {
    xischeHeader: Header,
    adBanner: Ad,
    Listing,
    xischeFooter: Footer
  },
  mounted () {
    this.getAllTypes()
    this.getAllTopics()
  },
  methods: {
    getAllTypes () {
      var self = this
      var app_id = 'appH81X67TStprrkF' // temp
      var app_key = 'key0Uo9OP77Cxoi5c' // temp
      axios.get(
        'https://api.airtable.com/v0/' + app_id + '/Type',
        {
          headers: { Authorization: 'Bearer ' + app_key }
        }
      ).then(function (response) {
        response.data.records.forEach(element => {
          self.allTypes.push({ id: element.Name, value: element.fields.Name })
        })
      }).catch(function (error) {
        console.log(error)
      })
    },
    getAllTopics () {
      var self = this
      var app_id = 'app5cUNhi6XgdnSM7'
      var app_key = 'keyITmskJgGkevh3j'
      axios.get(
        'https://api.airtable.com/v0/' + app_id + '/Topics',
        {
          headers: { Authorization: 'Bearer ' + app_key }
        }
      ).then(function (response) {
        response.data.records.forEach(element => {
          self.allTopics.push({ id: element.id, value: element.fields.Name })
        })
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>
