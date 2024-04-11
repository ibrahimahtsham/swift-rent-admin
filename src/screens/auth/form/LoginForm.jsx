import "../Login.css";

export const LoginForm = ({ formik, theme }) => (
  <form className="login-form" onSubmit={formik.handleSubmit}>
    <div className="input-field">
      <input
        type="text"
        name="username"
        id="username"
        {...formik.getFieldProps("username")}
        className={`input-field-input ${theme} ${
          formik.touched.username && formik.errors.username ? "error" : ""
        }`}
        required
      />
      <label
        htmlFor="username"
        className={`input-field-label ${theme} ${
          formik.touched.username && formik.errors.username ? "error" : ""
        }`}
      >
        Username
      </label>
      {formik.touched.username && formik.errors.username ? (
        <div className="error-text">{formik.errors.username}</div>
      ) : null}
    </div>
    <div className="input-field">
      <input
        type="password"
        name="password"
        id="password"
        {...formik.getFieldProps("password")}
        className={`input-field-input ${theme} ${
          formik.touched.password && formik.errors.password ? "error" : ""
        }`}
        required
      />
      <label
        htmlFor="password"
        className={`input-field-label ${theme} ${
          formik.touched.password && formik.errors.password ? "error" : ""
        }`}
      >
        Password
      </label>
      {formik.touched.password && formik.errors.password ? (
        <div className="error-text">{formik.errors.password}</div>
      ) : null}
    </div>
    <button type="submit" className={`login-button ${theme}`}>
      Login
    </button>
  </form>
);
