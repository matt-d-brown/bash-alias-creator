import test from 'ava';
import bashAliasCreator from '.';

test('title', t => {
	t.throws(() => {
		bashAliasCreator(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(bashAliasCreator('unicorns'), 'unicorns & rainbows');
});
