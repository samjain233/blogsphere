import BlogData from "../models/blog";

const getBlog = async (slug: string): Promise<any> => {
  try {
    const data = await BlogData.findOne({ slug: slug });
    if (data !== null) {
      return {
        status: true,
        data: data,
      };
    }
    return {
      status: false,
      msg: "blog doesn't exists",
    };
  } catch (err) {
    return {
      status: false,
      msg: "some error occured",
      err: err,
    };
  }
};

export { getBlog };
