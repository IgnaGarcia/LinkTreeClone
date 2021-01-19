const Theme = (primary, primaryAlt, secondary) => {
    return {
        colorPrimary: primary,
        colorSecondary: secondary
    }
}

const Theme1 = Theme('#212121', '#43a047');
const Theme2 = Theme('#212121', '#00acc1');
const Theme3 = Theme('#212121', '#039be5');
const Theme4 = Theme('#212121', '#fb8c00');
const Theme5 = Theme('#b71c1c', '#fff');
const Theme6 = Theme('#546e7a', '#43a047');
const Theme7 = Theme('#6a1b9a', '#fff');


const Themes = [Theme1, Theme2, Theme3, Theme4, Theme5, Theme6, Theme7]

export default Themes;