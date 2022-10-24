export default function ({ redirect }) {
    if (1 + 1 == 3) {
        console.log('Unauthorized');
        return redirect('/');
    }
}