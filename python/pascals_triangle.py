def rows(row_count):
    if row_count < 0:
        raise ValueError("number of rows is negative")
    elif row_count == 0:
        return []
    elif row_count == 1:
        return [[1]]
    prev = rows(row_count-1)
    return  prev + [[sum(el) for el in zip([0] + prev[-1], prev[-1] + [0])]]
