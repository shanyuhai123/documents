---
autoSort: -8
---

# 字符串转换整数 (atoi)

一开始写了一堆判断，看到官方题解就默默删除了原答案，太 low 了。

## 自动机

|           |  ‘ ’  |  +/-   |  number   | other |
| :-------: | :---: | :----: | :-------: | :---: |
|   start   | start | signed | in_number |  end  |
|  signed   |  end  |  end   | in_number |  end  |
| in_number |  end  |  end   | in_number |  end  |
|    end    |  end  |  end   |    end    |  end  |

```ts
enum STATES {
  START,
  SIGNED,
  IN_NUMBER,
  END
}

enum SIGNS {
  POSITIVE,
  NEGATIVE
}

const max = 2 ** 31 - 1
const min = -(2 ** 31)

class AutoMaton {
  public sign = SIGNS.POSITIVE
  public ans = 0

  private state = STATES.START
  private table = {
    [STATES.START]: [STATES.START, STATES.SIGNED, STATES.IN_NUMBER, STATES.END],
    [STATES.SIGNED]: [STATES.END, STATES.END, STATES.IN_NUMBER, STATES.END],
    [STATES.IN_NUMBER]: [STATES.END, STATES.END, STATES.IN_NUMBER, STATES.END],
    [STATES.END]: [STATES.END, STATES.END, STATES.END, STATES.END]
  }

  private getColIndex(c: string): number {
    if (c === ' ') return 0
    if (c === '+' || c === '-') return 1
    if (/^[0-9]$/.test(c)) return 2
    return 3
  }

  public process(c: string) {
    this.state = this.table[this.state][this.getColIndex(c)]

    if (this.state === STATES.IN_NUMBER) {
      this.ans = this.ans * 10 + Number(c)
      this.ans = this.sign === SIGNS.POSITIVE
        ? Math.min(this.ans, max)
        : Math.min(this.ans, -min)
    } else if (this.state === STATES.SIGNED) {
      this.sign = c === '+'
        ? SIGNS.POSITIVE
        : SIGNS.NEGATIVE
    }
  }
}

function myAtoi(s: string): number {
  const automaton = new AutoMaton()
  for (const char of s) {
    automaton.process(char)
  }

  return (automaton.sign === SIGNS.POSITIVE ? 1 : -1) * automaton.ans
}
```
