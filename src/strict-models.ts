/**
 * When true, an agent file whose `model:` does not resolve to an available model
 * fails the spawn instead of silently running on the parent's model. See
 * `strictAgentModels` in settings.ts.
 */
let strictAgentModels = false;
export function getStrictAgentModels(): boolean { return strictAgentModels; }
export function setStrictAgentModels(b: boolean): void { strictAgentModels = b; }

/** The error a strict spawn reports for an agent file's unresolvable `model:`. */
export function unavailableAgentModelMessage(configModel: string, parentModel?: { provider: string; id: string }): string {
  const parent = parentModel ? `${parentModel.provider}/${parentModel.id}` : "the parent's model";
  return (
    `Agent model "${configModel}" is not an available model (check \`pi --list-models\` and its provider auth). ` +
    `strictAgentModels is on, so the agent does not fall back to ${parent}. ` +
    `Fix the agent file's model: line, or set strictAgentModels to false.`
  );
}
