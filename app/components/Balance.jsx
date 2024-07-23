import getUserBalance from '../actions/getUserBalance';
import { addCommas } from '@/lib/utils';

const Balance = async () => {
    const { balance } = await getUserBalance();

    return (
        <section id="balance">
            <h3>Your Balance</h3>
            <div className={'balance ' + (balance < 0 ? 'danger' : 'success')}>
                €{addCommas(balance ?? 0)}
            </div>
        </section>
    );
};
export default Balance;
