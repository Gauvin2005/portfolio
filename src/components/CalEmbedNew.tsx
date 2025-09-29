'use client'

import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

export const CalEmbedNew: React.FC = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"})
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"})
    })()
  }, [])

  return (
    <Cal 
      namespace="30min"
      calLink="gavin-rottet/30min"
      style={{
        width: "100%",
        height: "100%",
        minHeight: "400px",
        overflow: "auto",
        borderRadius: "8px"
      }}
      config={{
        layout: "month_view",
        theme: "dark",
        brandColor: "#10B981"
      }}
    />
  )
}
