import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const endpointSamitra = import.meta.env.VITE_ENDPOINT;
export const useFetchPosts = () => {
  return useQuery({
    queryKey: ["fetchPost"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${endpointSamitra}/posts?categories=3&status=publish`
      );
      return data;
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export const useFetchPostsDetails = (slug) => {
  return useQuery({
    queryKey: ["fetchPostDetail", slug],
    queryFn: async () => {
      const { data } = await axios.get(
        `${endpointSamitra}/posts?status=publish&slug=${slug}`
      );
      return data;
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export const useFetchAllPost = (page = 1, limit = 18) => {
  return useQuery({
    queryKey: ["fetchAllPost", page, limit],
    queryFn: async () => {
      const response = await axios.get(
        `${endpointSamitra}/posts?status=publish&per_page=${limit}&page=${page}`
      );

      const totalPosts = response?.headers["x-wp-total"] || 0;
      const totalPages = response.headers["x-wp-totalpages"] || 1;

      return {
        posts: response?.data,
        totalPosts: Number(totalPosts),
        totalPages: Number(totalPages),
      };
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export const useFetchRandomPosts = (limit = 5) => {
  return useQuery({
    queryKey: ["fetchRandomPosts", limit],
    queryFn: async () => {
      const response = await axios.get(
        `${endpointSamitra}/posts?status=publish&orderby=rand&per_page=${limit}`
      );
      return response?.data || [];
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export const useFetchPageCoverPost = () => {
  return useQuery({
    queryKey: ["fetchPageCover"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${endpointSamitra}/posts?status=publish&categories=7`
      );
      return data;
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export const useSearchByTitle = (title) => {
  return useQuery({
    queryKey: ["fetchAllPost", title],
    queryFn: async () => {
      const { data } = await axios.get(
        `${endpointSamitra}/posts?status=publish&search=${title}`
      );
      return data;
    },
    enabled: Boolean(title),
    refetchOnWindowFocus: false,
    retry: false,
  });
};
