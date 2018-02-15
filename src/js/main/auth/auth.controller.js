class AuthCtrl {
  constructor(User, $state) {
    'ngInject';

    this._User = User;
    this._$state = $state;

    this.title = $state.current.title;
    this.authType = $state.current.name.replace('app.', '');

  }

  submitForm() {
    this.isSubmitting = true;

    this._User.attemptAuth(this.authType, this.formData).then(
      (res) => {
        if (res.data.user.role === "Basic_User"){
            this._$state.go('app.basic_home');
        } else if (res.data.user.role === "Unlimited_User"){
            this._$state.go('app.unlimited_home');
        } else if (res.data.user.role === "Master_User"){
            this._$state.go('app.master_home');
        } else if (res.data.user.role === "All_Instructor_User"){
            this._$state.go('app.instructor_home');
        } else if (res.data.user.role === "Unlimited_Instructor_User"){
            this._$state.go('app.unlimited_ instructor_home');
        }
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    )
  }
}

export default AuthCtrl;
