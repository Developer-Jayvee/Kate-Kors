import type { FormEvent } from "react";
import { supabase } from "../../../config/supaBaseClient";
import { swal } from "../../../utils/swal.utils";

export const loginUser = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    return swal.error("Please complete the required fields");
  }

  swal
    .question("Are you sure you want to login ?", "Yes")
    .then(async (result) => {
      if (result.isConfirmed) {
        swal.loading();
        const { data } = await supabase
          .from("users")
          .select("username,password")
          .eq("username", username)
          .single();

        swal.close();
        if (!data) {
          return swal.error("Invalid username and password.");
        }
        swal.success("Successfully login.")
        .then( (result) => {
            if(result.isConfirmed){
                swal.close();
                window.location.href = "/dashboard"
            }
        })
       
      }
    });
};
