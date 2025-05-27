import axios from 'axios';

const API_URL = 'http://localhost:1337/api';

export async function getBlogs() {
  try {
    const res = await axios.get(`${API_URL}/blogs?populate=*`);
    return res.data.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
}

export async function getBlogBySlug(slug) {
  try {
    const res = await axios.get(`${API_URL}/blogs?filters[slug][$eq]=${slug}&populate=*`);
    if (!res.data.data || res.data.data.length === 0) {
      throw new Error('Blog not found');
    }
    return res.data.data[0];
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    throw error;
  }
}
