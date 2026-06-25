import { useCallback, useState } from 'react'
import { FormState } from '@/types'

export function useLeadForm() {
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState<FormState>({})

  const submit = useCallback(async (formData: Record<string, any>) => {
    setLoading(true)
    setState({})

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        setState({
          success: false,
          error: result.error || 'Failed to submit form',
        })
        return false
      }

      setState({
        success: true,
        message: result.message || 'Form submitted successfully',
      })
      return true
    } catch (error) {
      setState({
        success: false,
        error: 'An error occurred. Please try again.',
      })
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  return { submit, loading, state }
}
