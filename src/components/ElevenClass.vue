<template>
    <div>
        <h2>Form</h2>
        <ul v-for="err in error" v-bind:key="err">
            <li>
                {{ err }} is required
            </li>
        </ul>
        <input type="text" placeholder="Enter username" v-model="form.username" />
        <input type="password" placeholder="Enter password" v-model="form.password" />
        <br />
        <select v-model="form.country">
            <option value="Pakistan">Pakistan</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="USA">USA</option>
        </select>
        <br />
        <label>Male:</label>
        <input type="radio" value="male" v-model="form.gender" />
        <label>Female:</label>
        <input type="radio" value="female" v-model="form.gender" />
        <br />
        <label>Hobbies</label>
        <label>Cricket:</label><input type="checkbox" value="Cricket" v-model="form.technology" />
        <label>Football:</label><input type="checkbox" value="Football" v-model="form.technology" />
        <label>Hockey:</label><input type="checkbox" value="Hockey" v-model="form.technology" />
        <button v-on:click="login">Add</button>
        <p>{{ form.username }}</p>
        <p>{{ form.password }}</p>
        <p>{{ form.country }}</p>
        <p>{{ form.gender }}</p>
        <p>{{ form.technology }}</p>

    </div>
</template>
<script>
export default {
    name: 'ElevenClass',
    data() {
        return {
            form: {
                username: '',
                password: '',
                country: '',
                gender: '',
                technology: []
            },
            error: []
        }
    },
    methods: {
        login() {

            // console.log("submitted", this.form)
            this.error = []
            for (const field in this.form) {
                if (this.form[field] === "" || this.form[field].length === 0) {
                    this.error.push(field);
                }
            }
            if (this.error.length === 0) {
                console.log("Submitted", this.form);
            }
            console.log(this.error);

        }
    }

}

</script>