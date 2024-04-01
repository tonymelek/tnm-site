<template>
    <div class="max-w-lg mx-auto text-left border-solid border-2 rounded-lg	 border-indigo-400 shadow-md p-3 m-2">
        <form @submit.prevent="submitForm">
            <div class="mb-4">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                <input v-model="name" type="text" id="name" name="name" class="form-input mt-1 block w-full rounded">
            </div>
            <div class="mb-4">
                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input v-model="email" type="email" id="email" name="email"
                    class="form-input mt-1 block w-full rounded">
            </div>
            <div class="mb-4">
                <label for="feedback" class="block text-gray-700 text-sm font-bold mb-2">Feedback:</label>
                <textarea v-model="feedback" id="feedback" name="feedback" rows="4"
                    class="form-textarea mt-1 block w-full rounded"></textarea>
            </div>
            <button type="submit" class="btn btn-primary px-4">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            feedback: ''
        };
    },
    methods: {
        submitForm() {
            // Here you can submit the form data to your backend or perform any other action
            console.log('Form submitted:', this.name, this.email, this.feedback);
            // Reset form fields
            this.name = '';
            this.email = '';
            this.feedback = '';
        }
    }
}
</script>