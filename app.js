import './src/main.scss'


// ? QUERY
let fullName = document.getElementById("fullName")
let userName = document.getElementById("userName")
let email = document.getElementById("email")
let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirmPassword")
let submit = document.getElementById("submit")
let warnings = document.querySelectorAll(".warning")

userName.value = userName.value.trim()
email.value = email.value.trim()
password.value = password.value.trim()
confirmPassword.value = confirmPassword.value.trim()

//? EVENT LISTENERS
submit.addEventListener('click', (event) => {
  event.preventDefault()

  //validating full name
  if (fullName.value === '') {
    setFailedFor(fullName, "* This field couldn't be empty")
  } else {
    setSuccessFor(fullName)
  }

  // validating username
  if (userName.value === '') {
    setFailedFor(userName, "* This filed couldn't be empty");
  } else if (userName.value) {
    //checking regExp pattern.
    let pattern = /^[a-zA-Z]+([a-zA-Z0-9](_|-)[a-zA-Z0-9])*[a-zA-Z0-9]+$/
    if (pattern.test(userName.value)) {
      setSuccessFor(userName)
    } else {
      setFailedFor(userName, "* Invalid Username")
    }
  } else {
    setSuccessFor(userName)
  }


  //validating email
  if (email.value === '') {
    setFailedFor(email, "* This field couldn't be empty.")
  } else if (email.value) {
    let pattern = /^[a-zA-Z0-9]+([a-zA-Z0-9]{2,}(@{1})[a-zA-Z]+)\.com$/
    if (pattern.test(email.value)) {
      setSuccessFor(email)
    } else {
      setFailedFor(email, "* Invalid Email")
    }
  } else {
    setSuccessFor(email)
  }

  // validating Password
  if (password.value === '') {
    setFailedFor(password, "* This field couldn't be empty.")
  } else if (password.value) {
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    if (pattern.test(password.value)) {
      setSuccessFor(password)
    } else {
      setFailedFor(password, "* Invalid Password")
    }
  } else {
    setSuccessFor(password)
  }

  //validating confirm Password
  if (confirmPassword.value === '') {
    setFailedFor(confirmPassword, "* This field couldn't be empty.")
  } else if (password.value !== confirmPassword.value) {
    setFailedFor(confirmPassword, 'Password did not match.')
  } else {
    setSuccessFor(confirmPassword)
  }
})



//? FUNCTIONS
let setFailedFor = (target, message) => {
  let parent = target.parentElement
  let warning = parent.querySelector("p")
  let warningIcon = parent.querySelector(".exclamation")
  warningIcon.className = "exclamation invalid"
  warning.textContent = message
  warning.className = "warning showWarning"

  parent.querySelector(".circle").classList.remove("success")

}

let setSuccessFor = (target) => {
  let parent = target.parentElement
  let successIcon = parent.querySelector(".circle")
  successIcon.className = "circle success"

  parent.querySelector(".exclamation").classList.remove("invalid")
  parent.querySelector("p").classList.remove("showWarning")
}