import { ref } from 'vue';

export class AppComponent {
    public count = ref(0);

    constructor() {
        
    }

    increment() {
        this.count.value++;
    }
}
