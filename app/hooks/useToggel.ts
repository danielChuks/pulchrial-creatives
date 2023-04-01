import { useState } from "react"
import { Toggle } from "../interfaces"

export default function useToggel(): Toggle {
    const [status, setStatus] = useState(false)

    const toggleStatus = () => setStatus((prevState) => !prevState);
  return {
    status,
    toggleStatus
  }
}
