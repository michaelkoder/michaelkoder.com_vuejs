<template>
<div id="contact-form" class="contact-form">
		<h1 class="contact-form_title">Contact Form</h1>
		<div class="separator"></div>

		<div v-if="isSending" class="loading">Sendig...</div>

		<form class="form" @submit="onSubmit">
			<input required name="name" v-model='contact.name' placeholder="Name" type="text" autocomplete="off">
			<input required name="email" v-model="contact.email" placeholder="E-mail" type="email" autocomplete="off">
			<textarea name="message" v-model="contact.message" rows="4" placeholder="Message"></textarea>
		   <button class="button">Send</button>
		</form>
	</div>

</template>

<script>

//https://codepen.io/danielpro4/pen/oepXWJ
export default {
    'el': '#contact-form',
	data: {
		contact: {
			name: '',
			email: '',
			message: '',
		},

		isSending: false
	},

	methods: {

		/**
		 * Clear the form
		 */	
		clearForm() {
			for (let field in this.contact) {
				this.contact[field] = ''
			}
		},

		/**
		 * Handler for submit
		 */	
		onSubmit(evt) {
			evt.preventDefault();

			this.isSending = true;

			setTimeout(() => {
				// Build for data
				let form = new FormData();
				for (let field in this.contact) {
					form.append(field, this.contact[field]);
				}

				// Send form to server	
				this.$http.post('/app.php', form).then((response) => {
					console.log(response);
					this.clearForm();
					this.isSending = false;
				}).catch((e) => {
					console.log(e)
				});

			}, 1000);
		}
	}

};
</script>