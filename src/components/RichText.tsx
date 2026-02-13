import React, { Fragment } from 'react'

export const Serialize = ({ nodes }: { nodes: any[] }) => {
  return (
    <Fragment>
      {nodes?.map((node, i) => {
        if (node.type === 'text') {
          let text = <span key={i}>{node.text}</span>

          if (node.format & 1) {
            text = <strong key={i}>{text}</strong>
          }

          if (node.format & 2) {
            text = <em key={i}>{text}</em>
          }

          if (node.format & 8) {
            text = (
              <span style={{ textDecoration: 'underline' }} key={i}>
                {text}
              </span>
            )
          }

          if (node.format & 4) {
            text = (
              <span style={{ textDecoration: 'line-through' }} key={i}>
                {text}
              </span>
            )
          }

          if (node.format & 16) {
            text = <code key={i}>{text}</code>
          }

          return <Fragment key={i}>{text}</Fragment>
        }

        if (!node) {
          return null
        }

        switch (node.type) {
          case 'h1':
            return (
              <h1 key={i}>
                <Serialize nodes={node.children} />
              </h1>
            )
          case 'h2':
            return (
              <h2 key={i}>
                <Serialize nodes={node.children} />
              </h2>
            )
          case 'h3':
            return (
              <h3 key={i}>
                <Serialize nodes={node.children} />
              </h3>
            )
          case 'h4':
            return (
              <h4 key={i}>
                <Serialize nodes={node.children} />
              </h4>
            )
          case 'h5':
            return (
              <h5 key={i}>
                <Serialize nodes={node.children} />
              </h5>
            )
          case 'h6':
            return (
              <h6 key={i}>
                <Serialize nodes={node.children} />
              </h6>
            )
          case 'quote':
            return (
              <blockquote key={i}>
                <Serialize nodes={node.children} />
              </blockquote>
            )
          case 'ul':
            return (
              <ul key={i}>
                <Serialize nodes={node.children} />
              </ul>
            )
          case 'ol':
            return (
              <ol key={i}>
                <Serialize nodes={node.children} />
              </ol>
            )
          case 'li':
            return (
              <li key={i}>
                <Serialize nodes={node.children} />
              </li>
            )
          case 'link':
            return (
              <a href={node.fields?.url || node.url} target={node.fields?.newTab ? '_blank' : undefined} rel={node.fields?.newTab ? 'noopener noreferrer' : undefined} key={i}>
                <Serialize nodes={node.children} />
              </a>
            )

          case 'upload':
            if (!node.value) return null
            return (
              <div key={i} className="my-8 relative w-full aspect-video rounded-xl overflow-hidden">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img
                   src={node.value.url}
                   alt={node.value.alt || ''}
                   className="object-contain w-full h-full"
                 />
              </div>
            )
            
          default:
            // Check if paragraph is empty or just whitespace
            const isEmpty = !node.children || node.children.length === 0 || (node.children.length === 1 && node.children[0].text === '')
            
            if (isEmpty) {
               return <br key={i} />
            }

            return (
              <p key={i} className="mb-6 leading-loose text-slate-600">
                <Serialize nodes={node.children} />
              </p>
            )
        }
      })}
    </Fragment>
  )
}

const RichText = ({ content }: { content: any }) => {
  if (!content?.root?.children) {
    return null
  }

  return (
    <div className="rich-text">
       {/* @ts-ignore */}
      <Serialize nodes={content.root.children} />
    </div>
  )
}

export default RichText
