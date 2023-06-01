<template>
    <div class="items">
        <div class="d-flex flex-wrap justify-content-evenly px-3">
            <div class="item" v-for="item in items" :key="item.name">
                <div class="d-flex align-items-center justify-content-center">
                    <img
                        :src="item.pictureUrl"
                        :alt="item.name"
                        class="h-100 my-4"
                    />
                </div>
                <hr />
                <div class="d-flex">
                    <div class="itemInfo px-2">
                        <div class="col1 d-flex flex-column gap-2 p-1">
                            <h4>{{ item.price }}</h4>
                            <div>
                                <div class="stared">
                                    <i class="bi bi-star-fill"></i
                                    ><i class="bi bi-star-fill"></i
                                    ><i class="bi bi-star-fill"></i>
                                </div>
                                <div class="unstar">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <span class="ms-2 rated">{{ item.star }}</span>
                            </div>
                            <p>{{ item.name }}</p>
                            <p>{{ item.detail }}</p>
                        </div>
                    </div>
        
                    <div class="col2 d-flex justify-content-end">
                        <i type="button" class="bi bi-cart3 me-2 border px-2 py-1 rounded"></i>
                    </div>
                </div>
            </div>
        </div>
      </div>
    
</template>

<script>
import { onMounted, computed, ref } from 'vue';
import axios from 'axios';

export default {
  name: 'MyComponent',
  setup() {
    const items = ref([]);

    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost:3030/');
        items.value = response.data;
      } catch (error) {
        console.error(error);
      }
    });

    const sortedItems = computed(() => {
      // You can apply any computed logic on the loaded items here
      return items.value.sort((a, b) => a.name.localeCompare(b.name));
    });

    return {
      items: sortedItems,
    };
  },
};
</script>

<!-- <script>
import { onMounted, computed, ref } from 'vue';
import axios from 'axios';

export default {
    name: 'ComponentItemsContainer',
  props: ['apiEndpoint'],
  setup(props) {
    const items = ref([]);

    onMounted(async () => {
      try {
        const response = await axios.get(props.apiEndpoint);
        items.value = response.data;
      } catch (error) {
        console.error(error);
      }
    });

    const sortedItems = computed(() => {
      return items.value.sort((a, b) => a.name.localeCompare(b.name));
    });

    return {
      items: sortedItems,
    };
  },
};
</script> -->