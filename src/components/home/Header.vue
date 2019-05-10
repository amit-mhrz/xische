<!-- Header -->
<template>
    <header>
        <div class="search-input">
            <input type="text" placeholder="Type search here |">
            <a href="#" class="icon icon-close2"></a>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-2">
                    <div class="logo">
                    <h1>
                        <span class="custom__letter">I</span>nsights
                        <span><span>by</span> XISCHE & CO</span>
                    </h1>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="filter__content">
                    <div class="title">CONTENT TYPE</div>
                    <ul class="type__list">
                        <li v-for="(type, i) in allTypes" :key="i">
                            <a href="#" :id="type.id"><span class="icon icon-Twitter"></span> {{type.value}}</a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="filter__category">
                    <div id="accordion">
                        <div class="card">
                            <div class="card-header" id="filterToggle">
                                <div class="title">FILTER BY <button class="btn btn-link" data-toggle="collapse" data-target="#filterExpand">
                                6 Filters Applied <span>+</span>
                                </button>
                                </div>
                            </div>
                            <div id="filterExpand" class="collapse" data-parent="#accordion">
                                <div class="card-body">
                                <div class="filters__applied">
                                    <a href="#">Label <button class="icon icon-close"></button></a>
                                    <a href="#">Label <button class="icon icon-close"></button></a>
                                    <a href="#">Label <button class="icon icon-close"></button></a>
                                    <a href="#">Label <button class="icon icon-close"></button></a>
                                </div>
                                <div class="filter__reset">
                                    <button class="btn btn--reset">Clear All Filters</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <div class="dropdown">
                                <button class="dropdown-toggle" type="button" id="cities" data-toggle="dropdown">
                                Cities <span class="icon icon-arrow-down"></span>
                                </button>
                                <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Cities</a>
                                <a class="dropdown-item" href="#">Cities</a>
                                <a class="dropdown-item" href="#">Cities</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="dropdown">
                                <button class="dropdown-toggle" type="button" id="themes" data-toggle="dropdown">
                                Themes <span class="icon icon-arrow-down"></span>
                                </button>
                                <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Themes</a>
                                <a class="dropdown-item" href="#">Themes</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="dropdown">
                                <button class="dropdown-toggle" type="button" id="topics" data-toggle="dropdown">
                                Topics <span class="icon icon-arrow-down"></span>
                                </button>
                                
                                <div class="dropdown-menu">
                                    <span v-for="(topic, i) in allTopics" :key="i">
                                        <a href="#" class="dropdown-item" :id="topic.id">{{topic.value}}</a>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="dropdown">
                                <button class="dropdown-toggle" type="button" id="sectors" data-toggle="dropdown">
                                Sectors <span class="icon icon-arrow-down"></span>
                                </button>
                                <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Sectors</a>
                                <a class="dropdown-item" href="#">Sectors</a>
                                <a class="dropdown-item" href="#">Sectors</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="filter__timeline">
                    <div class="title">
                        <p>TIMELINE</p>
                        <div class="time-range"><span class="start">2010</span> - <span class="end">2020</span> </div>
                    </div>
                    <div class="timeline__slider">
                        <div></div>
                    </div>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="header__nav">
                    <button class="btn btn--search " @click="toggleSearchForm" :class="{ active: toggleCheck }"><span class="icon icon-search"></span></button>
                    <nav class="navbar  navbar-light bg-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" >
                        <span class="icon icon-menu">
                        <span class="path1"></span>
                        <span class="path2"></span>
                        <span class="path3"></span>
                        </span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Terms Of Use</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Xische</a></li>
                            </ul>
                        </div>
                    </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>


<script>
import $ from 'jquery'

export default {

    name: "header",
    props: {
        allTypes: {
            type: Array
        },
        allTopics: {
            type: Array
        }
    },
    data: () => ({
        toggleCheck: false,
        selectedTopics: []
    }),
    watch: {
        selectedTopics() {
            console.log("Type Selected --");
            this.$emit("topicSelected", this.selectedTopics); 
        },
    },
    methods: {
        toggleSearchForm() {
            this.toggleCheck = !this.toggleCheck;
            if (this.toggleCheck == true) {
                $('.search-input').slideDown();
            } else {
                $('.search-input').slideUp();
            }
        }
    }
}
</script>
