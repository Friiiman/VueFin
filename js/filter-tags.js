"use strict";

Vue.component("filter-tags", {
  props: {},

  data() {
    return {
      selectedTag: "",
      currentTagButton: "",
      tagsList: [
        "Kitchen",
        "Bedroom",
        "Building",
        "Architecture",
        "Kitchen Planning",
        "Bathroom",
      ],
      articlesList: [
        {
          tag: "Kitchen",
          title: "Kitchen 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.",
        },
        {
          tag: "Kitchen",
          title: "Kitchen 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.",
        },
        {
          tag: "Kitchen",
          title: "Kitchen 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.",
        },
        {
          tag: "Bedroom",
          title: "Bedroom 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.",
        },
        {
          tag: "Bedroom",
          title: "Bedroom 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.",
        },
        {
          tag: "Bedroom",
          title: "Bedroom 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.",
        },
        {
          tag: "Building",
          title: "Building 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.",
        },
        {
          tag: "Building",
          title: "Building 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.",
        },
        {
          tag: "Building",
          title: "Building 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.",
        },
        {
          tag: "Architecture",
          title: "Architecture 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.",
        },
        {
          tag: "Architecture",
          title: "Architecture 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.",
        },
        {
          tag: "Architecture",
          title: "Architecture 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.",
        },
        {
          tag: "Kitchen Planning",
          title: "Kitchen Planning 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.",
        },
        {
          tag: "Kitchen Planning",
          title: "Kitchen Planning 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.",
        },
        {
          tag: "Kitchen Planning",
          title: "Kitchen Planning 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.",
        },
        {
          tag: "Bathroom",
          title: "Bathroom 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.",
        },
        {
          tag: "Bathroom",
          title: "Bathroom 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.",
        },
        {
          tag: "Bathroom",
          title: "Bathroom 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis neque dolorum! Provident quibusdam maiores quia quisquam, velit quod accusantium, vero sunt adipisci nihil voluptate laudantium omnis eos ut voluptatem.",
        },
      ],
    };
  },
  template: `
    <div>
        <div class="blog-details-content__tags-buttons">
            <button @click='selectTag(tag)' class="blog-details-content__tags-button" v-for="(tag, index) in tagsList" :key="index">{{tag}}</button>
        </div>
        <div class="blog-details-content__tags-items">
            <details class="blog-details-content__tags-item" v-for="(article, index) in filterList" :key="index">
            <summary>{{article.title}}</summary>
            <p class="blog-details-content__tags-text">{{article.description}}</p>
            </details>
        </div>
    </div>`,
  methods: {
    selectTag(tag) {
      if (this.currentTagButton) {
        this.currentTagButton.target.classList.remove(
          "blog-details-content__tags-button--active"
        );
        event.target.classList.add("blog-details-content__tags-button--active");
        this.currentTagButton = event;
      } else {
        event.target.classList.add("blog-details-content__tags-button--active");
        this.currentTagButton = event;
      }
      if (this.selectedTag === tag) {
        this.selectedTag = "";
        event.target.classList.remove(
          "blog-details-content__tags-button--active"
        );
      } else {
        this.selectedTag = tag;
      }
    },
  },
  computed: {
    filterList() {
      return this.selectedTag
        ? this.articlesList.filter((element) =>
            element.tag.includes(this.selectedTag)
          )
        : this.articlesList;
    },
  },
});

new Vue({
  el: "#app",
  data: {},
});
