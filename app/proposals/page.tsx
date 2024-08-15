"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Page() {
  const [proposals, setProposals] = useState<any[] | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("proposals").select();
      setProposals(data);
    };
    getData();
  }, []);

  return <pre>{JSON.stringify(proposals, null, 2)}</pre>;
}
