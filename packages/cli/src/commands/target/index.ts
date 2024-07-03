import Client from '../../util/client';
import { parseArguments } from '../../util/get-args';
import getInvalidSubcommand from '../../util/get-invalid-subcommand';
import handleError from '../../util/handle-error';
import { help } from '../help';
import list from './list';
import { targetCommand } from './command';
import { getLinkedProject } from '../../util/projects/link';
import { getFlagsSpecification } from '../../util/get-flags-specification';

const COMMAND_CONFIG = {
  ls: ['ls', 'list'],
};

export default async function main(client: Client) {
  let parsedArguments;
  const flagsSpecification = getFlagsSpecification(targetCommand.options);

  try {
    parsedArguments = parseArguments(client.argv.slice(2), flagsSpecification);
  } catch (error) {
    handleError(error);
    return 1;
  }
  console.log(parsedArguments.flags);

  if (parsedArguments.flags['--help']) {
    client.output.print(
      help(targetCommand, { columns: client.stderr.columns })
    );
    return 2;
  }

  const subcommand = parsedArguments.args[1] || 'list';
  const args = parsedArguments.args.slice(2);
  const { cwd, output } = client;
  const link = await getLinkedProject(client, cwd);

  if (link.status === 'error') {
    return link.exitCode;
  }

  if (link.status === 'not_linked') {
    // TODO: prompt for link
    output.error('Project not linked');
    return 1;
  }

  switch (subcommand) {
    case 'ls':
    case 'list':
      return await list(client, parsedArguments.args, args, link);
    default:
      output.error(getInvalidSubcommand(COMMAND_CONFIG));
      client.output.print(
        help(targetCommand, { columns: client.stderr.columns })
      );
      return 2;
  }
}
