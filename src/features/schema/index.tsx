import * as yup from "yup";

export const SIGNINSCHEMA = yup.object().shape({
    username:yup.string().required('Username is required'),
    password: yup.string().required('Password is required')
})

export const SIGNUPSCHEMA = yup.object().shape({
    username:yup.string().required('Username is required'),
    password: yup.string().required('Password is required')
})
export const CREATEENTRYSCHEMA = yup.object().shape({
    watchedPorn:yup.string().required('Watchedporn is required'),
    relapseDetails: yup.string().required('RelapseDetails is required'),
    notes:yup.string().required('Note is required')
})








