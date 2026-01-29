import { toast } from 'react-toastify';
import axios from 'axios';

const notify = (msg, flag) => toast(msg, { type: flag ? "success" : "error" });

function slugCreate(name) {
    const slug = name.toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

    return slug
}

const axiosAPIinstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
});

function formatIndianCurrency(amount) {
    return amount.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR'
    });
}


export { notify, slugCreate, axiosAPIinstance, formatIndianCurrency }