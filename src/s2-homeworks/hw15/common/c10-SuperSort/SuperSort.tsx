import React from 'react';
import s from './../../HW15.module.css'
import u from './arrowup.png'
import d from './arrowdown.png'
import none from './undo2_11zon.png'
// добавить в проект иконки и импортировать
const downIcon = d
const upIcon = u
const noneIcon = none

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === '') {
      return down
    } else if (sort === down) {
      return up
    } else if (sort === up) {
      return ''
    } else {
      return down
    }
    // return  sort === '' ? down : sort === down ? up : sort === up ? '' : sort === '' ? down : down;   // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
      <span id={id + '-sort-' + value} onClick={onChangeCallback} className={s.icon}>
        {/* <img id={id + '-icon-' + sort} src={icon}/> */}
        <img src={icon} alt="#" />
        
      </span>
    )
}

export default SuperSort
