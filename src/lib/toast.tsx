import { AnimatePresence, motion } from "framer-motion"
import { createContext, FC, useContext, useState } from "react"

interface IToastContext {
  setToast: (message: string) => void
  message: string | null
}

const ToastContext = createContext<IToastContext | null>(null)

export const useToast = () => {
  return useContext(ToastContext)
}

export const ToastProvider: FC = ({ children }) => {
  const toast = useProvideToast()

  return (
    <ToastContext.Provider value={toast}>
      {toast.message && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -300, x: "-50%" }}
            animate={{ opacity: 1, y: 25, x: "-50%" }}
            exit={{ opacity: 0, y: -300, x: "-50%" }}
            className="bg-white rounded-full py-2 px-4 fixed left-1/2 z-[101]"
          >
            <span className="font-display text-pink-300 text-sm">{toast.message}</span>
          </motion.div>
        </AnimatePresence>
      )}
      {children}
    </ToastContext.Provider>
  )
}

const TOAST_TIMEOUT = 3000

function useProvideToast() {
  const [toast, setToast] = useState<null | string>(null)

  const setToastDisplay = (message: string) => {
    if (toast) {
      setToast(null)
      setTimeout(() => {
        setToast(message)
        window.setTimeout(() => {
          setToast(null)
        }, TOAST_TIMEOUT)
      }, 1000)
    }
    setToast(message)
    window.setTimeout(() => {
      setToast(null)
    }, TOAST_TIMEOUT)
  }

  return { setToast: setToastDisplay, message: toast }
}
