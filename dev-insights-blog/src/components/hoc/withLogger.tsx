import { useEffect, type ComponentType } from 'react'

export function withLogger<P extends object>(
  Component: ComponentType<P>,
  componentName = Component.displayName ?? Component.name ?? 'Component',
) {
  function LoggedComponent(props: P) {
    useEffect(() => {
      console.info(`[withLogger] ${componentName} mounted`)

      return () => {
        console.info(`[withLogger] ${componentName} unmounted`)
      }
    }, [])

    return <Component {...props} />
  }

  LoggedComponent.displayName = `withLogger(${componentName})`
  return LoggedComponent
}
