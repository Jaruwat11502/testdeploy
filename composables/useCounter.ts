//export default () => useState<number> ('counter',() => 0)

export default function() {
  return useState ('counter', () => 0)
}
